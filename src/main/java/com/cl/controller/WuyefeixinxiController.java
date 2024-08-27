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

import com.cl.entity.WuyefeixinxiEntity;
import com.cl.entity.view.WuyefeixinxiView;

import com.cl.service.WuyefeixinxiService;
import com.cl.service.TokenService;
import com.cl.utils.PageUtils;
import com.cl.utils.R;
import com.cl.utils.MPUtil;
import com.cl.utils.CommonUtil;
import java.io.IOException;

/**
 * 物业费信息
 * 后端接口
 * @author 
 * @email 
 * @date 2024-03-29 14:15:48
 */
@RestController
@RequestMapping("/wuyefeixinxi")
public class WuyefeixinxiController {
    @Autowired
    private WuyefeixinxiService wuyefeixinxiService;



    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,WuyefeixinxiEntity wuyefeixinxi,
		HttpServletRequest request){
		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("yonghu")) {
			wuyefeixinxi.setYonghuzhanghao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<WuyefeixinxiEntity> ew = new EntityWrapper<WuyefeixinxiEntity>();

		PageUtils page = wuyefeixinxiService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, wuyefeixinxi), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,WuyefeixinxiEntity wuyefeixinxi, 
		HttpServletRequest request){
        EntityWrapper<WuyefeixinxiEntity> ew = new EntityWrapper<WuyefeixinxiEntity>();

		PageUtils page = wuyefeixinxiService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, wuyefeixinxi), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( WuyefeixinxiEntity wuyefeixinxi){
       	EntityWrapper<WuyefeixinxiEntity> ew = new EntityWrapper<WuyefeixinxiEntity>();
      	ew.allEq(MPUtil.allEQMapPre( wuyefeixinxi, "wuyefeixinxi")); 
        return R.ok().put("data", wuyefeixinxiService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(WuyefeixinxiEntity wuyefeixinxi){
        EntityWrapper< WuyefeixinxiEntity> ew = new EntityWrapper< WuyefeixinxiEntity>();
 		ew.allEq(MPUtil.allEQMapPre( wuyefeixinxi, "wuyefeixinxi")); 
		WuyefeixinxiView wuyefeixinxiView =  wuyefeixinxiService.selectView(ew);
		return R.ok("查询物业费信息成功").put("data", wuyefeixinxiView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        WuyefeixinxiEntity wuyefeixinxi = wuyefeixinxiService.selectById(id);
		wuyefeixinxi = wuyefeixinxiService.selectView(new EntityWrapper<WuyefeixinxiEntity>().eq("id", id));
        return R.ok().put("data", wuyefeixinxi);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        WuyefeixinxiEntity wuyefeixinxi = wuyefeixinxiService.selectById(id);
		wuyefeixinxi = wuyefeixinxiService.selectView(new EntityWrapper<WuyefeixinxiEntity>().eq("id", id));
        return R.ok().put("data", wuyefeixinxi);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody WuyefeixinxiEntity wuyefeixinxi, HttpServletRequest request){
    	wuyefeixinxi.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(wuyefeixinxi);
        wuyefeixinxiService.insert(wuyefeixinxi);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody WuyefeixinxiEntity wuyefeixinxi, HttpServletRequest request){
    	wuyefeixinxi.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(wuyefeixinxi);
        wuyefeixinxiService.insert(wuyefeixinxi);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody WuyefeixinxiEntity wuyefeixinxi, HttpServletRequest request){
        //ValidatorUtils.validateEntity(wuyefeixinxi);
        wuyefeixinxiService.updateById(wuyefeixinxi);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        wuyefeixinxiService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	








}
