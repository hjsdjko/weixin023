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

import com.cl.entity.SheshibaoxiuEntity;
import com.cl.entity.view.SheshibaoxiuView;

import com.cl.service.SheshibaoxiuService;
import com.cl.service.TokenService;
import com.cl.utils.PageUtils;
import com.cl.utils.R;
import com.cl.utils.MPUtil;
import com.cl.utils.CommonUtil;
import java.io.IOException;

/**
 * 设施报修
 * 后端接口
 * @author 
 * @email 
 * @date 2024-03-29 14:15:48
 */
@RestController
@RequestMapping("/sheshibaoxiu")
public class SheshibaoxiuController {
    @Autowired
    private SheshibaoxiuService sheshibaoxiuService;



    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,SheshibaoxiuEntity sheshibaoxiu,
		HttpServletRequest request){
		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("yonghu")) {
			sheshibaoxiu.setYonghuzhanghao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<SheshibaoxiuEntity> ew = new EntityWrapper<SheshibaoxiuEntity>();

		PageUtils page = sheshibaoxiuService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, sheshibaoxiu), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,SheshibaoxiuEntity sheshibaoxiu, 
		HttpServletRequest request){
        EntityWrapper<SheshibaoxiuEntity> ew = new EntityWrapper<SheshibaoxiuEntity>();

		PageUtils page = sheshibaoxiuService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, sheshibaoxiu), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( SheshibaoxiuEntity sheshibaoxiu){
       	EntityWrapper<SheshibaoxiuEntity> ew = new EntityWrapper<SheshibaoxiuEntity>();
      	ew.allEq(MPUtil.allEQMapPre( sheshibaoxiu, "sheshibaoxiu")); 
        return R.ok().put("data", sheshibaoxiuService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(SheshibaoxiuEntity sheshibaoxiu){
        EntityWrapper< SheshibaoxiuEntity> ew = new EntityWrapper< SheshibaoxiuEntity>();
 		ew.allEq(MPUtil.allEQMapPre( sheshibaoxiu, "sheshibaoxiu")); 
		SheshibaoxiuView sheshibaoxiuView =  sheshibaoxiuService.selectView(ew);
		return R.ok("查询设施报修成功").put("data", sheshibaoxiuView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        SheshibaoxiuEntity sheshibaoxiu = sheshibaoxiuService.selectById(id);
		sheshibaoxiu = sheshibaoxiuService.selectView(new EntityWrapper<SheshibaoxiuEntity>().eq("id", id));
        return R.ok().put("data", sheshibaoxiu);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        SheshibaoxiuEntity sheshibaoxiu = sheshibaoxiuService.selectById(id);
		sheshibaoxiu = sheshibaoxiuService.selectView(new EntityWrapper<SheshibaoxiuEntity>().eq("id", id));
        return R.ok().put("data", sheshibaoxiu);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody SheshibaoxiuEntity sheshibaoxiu, HttpServletRequest request){
    	sheshibaoxiu.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(sheshibaoxiu);
        sheshibaoxiuService.insert(sheshibaoxiu);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody SheshibaoxiuEntity sheshibaoxiu, HttpServletRequest request){
    	sheshibaoxiu.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(sheshibaoxiu);
        sheshibaoxiuService.insert(sheshibaoxiu);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody SheshibaoxiuEntity sheshibaoxiu, HttpServletRequest request){
        //ValidatorUtils.validateEntity(sheshibaoxiu);
        sheshibaoxiuService.updateById(sheshibaoxiu);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        sheshibaoxiuService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	








}
