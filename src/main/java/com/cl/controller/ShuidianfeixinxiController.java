package com.cl.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

import com.cl.utils.ValidatorUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.cl.annotation.IgnoreAuth;

import com.cl.entity.ShuidianfeixinxiEntity;
import com.cl.entity.view.ShuidianfeixinxiView;

import com.cl.service.ShuidianfeixinxiService;
import com.cl.service.TokenService;
import com.cl.utils.PageUtils;
import com.cl.utils.R;
import com.cl.utils.MPUtil;
import com.cl.utils.CommonUtil;
import java.io.IOException;

/**
 * 水电费信息
 * 后端接口
 * @author 
 * @email 
 * @date 2024-03-29 14:15:48
 */
@RestController
@RequestMapping("/shuidianfeixinxi")
public class ShuidianfeixinxiController {
    @Autowired
    private ShuidianfeixinxiService shuidianfeixinxiService;



    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,ShuidianfeixinxiEntity shuidianfeixinxi,
		HttpServletRequest request){
		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("yonghu")) {
			shuidianfeixinxi.setYonghuzhanghao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<ShuidianfeixinxiEntity> ew = new EntityWrapper<ShuidianfeixinxiEntity>();

		PageUtils page = shuidianfeixinxiService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, shuidianfeixinxi), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,ShuidianfeixinxiEntity shuidianfeixinxi, 
		HttpServletRequest request){
        EntityWrapper<ShuidianfeixinxiEntity> ew = new EntityWrapper<ShuidianfeixinxiEntity>();

		PageUtils page = shuidianfeixinxiService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, shuidianfeixinxi), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( ShuidianfeixinxiEntity shuidianfeixinxi){
       	EntityWrapper<ShuidianfeixinxiEntity> ew = new EntityWrapper<ShuidianfeixinxiEntity>();
      	ew.allEq(MPUtil.allEQMapPre( shuidianfeixinxi, "shuidianfeixinxi")); 
        return R.ok().put("data", shuidianfeixinxiService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(ShuidianfeixinxiEntity shuidianfeixinxi){
        EntityWrapper< ShuidianfeixinxiEntity> ew = new EntityWrapper< ShuidianfeixinxiEntity>();
 		ew.allEq(MPUtil.allEQMapPre( shuidianfeixinxi, "shuidianfeixinxi")); 
		ShuidianfeixinxiView shuidianfeixinxiView =  shuidianfeixinxiService.selectView(ew);
		return R.ok("查询水电费信息成功").put("data", shuidianfeixinxiView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        ShuidianfeixinxiEntity shuidianfeixinxi = shuidianfeixinxiService.selectById(id);
		shuidianfeixinxi = shuidianfeixinxiService.selectView(new EntityWrapper<ShuidianfeixinxiEntity>().eq("id", id));
        return R.ok().put("data", shuidianfeixinxi);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        ShuidianfeixinxiEntity shuidianfeixinxi = shuidianfeixinxiService.selectById(id);
		shuidianfeixinxi = shuidianfeixinxiService.selectView(new EntityWrapper<ShuidianfeixinxiEntity>().eq("id", id));
        return R.ok().put("data", shuidianfeixinxi);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody ShuidianfeixinxiEntity shuidianfeixinxi, HttpServletRequest request){
    	shuidianfeixinxi.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(shuidianfeixinxi);
        shuidianfeixinxiService.insert(shuidianfeixinxi);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody ShuidianfeixinxiEntity shuidianfeixinxi, HttpServletRequest request){
    	shuidianfeixinxi.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(shuidianfeixinxi);
        shuidianfeixinxiService.insert(shuidianfeixinxi);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody ShuidianfeixinxiEntity shuidianfeixinxi, HttpServletRequest request){
        //ValidatorUtils.validateEntity(shuidianfeixinxi);
        shuidianfeixinxiService.updateById(shuidianfeixinxi);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        shuidianfeixinxiService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	








}
